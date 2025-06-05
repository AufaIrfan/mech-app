"use server";

// import { validateCurrentUserCan } from "@/auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  addCategory,
  // addRepairToListing,
  // createRepair,
  // deleteRepair,
  getListing,
  removeRepairFromListing,
  updateCategory,
  updateListing,
} from "@/app/lib/getListingRepair";
// import { catchServerActionError } from "@/utils/error";
import map from "lodash/map";

const createListingFormSchema = z.object({
  title: z.string().min(1, { message: "Please add title." }),
  content: z.string().optional(),
  category: z.string().optional(),
  designIds: z.string(), //.min(1, { message: "Please add design included." })
  price: z.coerce.number(),
  status: z.enum(["draft", "publish"]),
  imageUrl: z
    .any()
    .transform((val) => ("string" === typeof val ? val : undefined))
    .optional(),
  accessPolicy: z.string().optional(),
});

const updateListingFormSchema = createListingFormSchema.extend({
  id: z.string(),
});

export const actionCreateListing = async (
  formData: FormData,
  tenantId: string,
) => {
  try {
    const userId = await getUsers(userId, "listing:create");
    const data = createListingFormSchema.parse(
      Object.fromEntries(formData.entries()),
    );

    const listing = await createRepair(repairId, {
      title: data.title,
      checker: userId,
      description: data.content,
      imageUrl: data.imageUrl,
      price: data.price,
      status: data.status,
      // accessPolicy: '',
    });

    if (!listing?.id) {
      throw new Error("Failed to create listing");
    }

    // insert category
    if (data.category) {
      const cat = await addCategory(tenantId, listing?.id, data.category);
      console.log("Create category", data.category, cat);
    }

    // add listing
    if (data.designIds) {
      const ids = data.designIds.split(","); // it is comma separated.
      const result = await addDesignToListing(tenantId, listing?.id, ids);
      console.log("Insert design", data.designIds, result);
    }

    // console.log("FORM DATA", created);

    const pathToRevalidate = formData.get("path-to-revalidate");
    if (pathToRevalidate) {
      revalidatePath(`/studios/${tenantId}${pathToRevalidate}`);
    }

    return {
      success: true,
      message: `Listing created!`,
    };
  } catch (error) {
    return catchServerActionError(error);
  }
};

export const actionUpdateListing = async (
  formData: FormData,
  tenantId: string,
) => {
  try {
    const userId = await validateCurrentUserCan(tenantId, "listing:update");
    const data = updateListingFormSchema.parse(
      Object.fromEntries(formData.entries()),
    );

    const listing = await updateListing(tenantId, data.id, {
      title: data.title,
      author: userId,
      description: data.content,
      imageUrl: data.imageUrl,
      price: data.price,
      status: data.status,
      // accessPolicy: '',
    });

    if (!listing?.id) {
      throw new Error("Failed to update listing");
    }

    const currentDesignListings = await getListing(tenantId, data.id);

    let idsToAddDesign: string[] = [];
    let idsToRemoveDesign: string[] = [];

    const ids = data.designIds.split(",").map(id => id.trim());
    const dbDesignIds = currentDesignListings.includedDesigns.map(design => design.id);
    console.log("current design id", dbDesignIds);
    ids.forEach((design) => {
        if (design && !dbDesignIds.includes(design)) {
          console.log("design included", design);
          idsToAddDesign.push(design);
          console.log("design id added", idsToAddDesign);
        }
    });
    // add design => saat action submit(publish) hanya submit id design yg dipilih bukan [array design], di edit form hanya menampilkan [array] id yg di select => publish aja
    await addDesignToListing(tenantId, listing?.id, idsToAddDesign);
    console.log("add design to listing", idsToAddDesign);

    dbDesignIds.forEach((design) => {
        if (design && !ids.includes(design)) {
          console.log("design id", design);
            idsToRemoveDesign.push(design);
        }
    });

    await removeDesignFromListing(tenantId, listing?.id, idsToRemoveDesign);

    console.log("category", data.category);

    const cat = await updateCategory(tenantId, listing?.id, data.category!);
    console.log("update category", cat);

    const pathToRevalidate = formData.get("path-to-revalidate");
    if (pathToRevalidate) {
      revalidatePath(`/studios/${tenantId}${pathToRevalidate}`);
    }

    return {
      success: true,
      message: `Listing updated!`,
    };
  } catch (error) {
    return catchServerActionError(error);
  }
};

export const actionDeleteListing = async (
  formData: FormData,
  tenantId: string,
) => {
  try {
    const userId = await validateCurrentUserCan(tenantId, "listing:delete");

    const id = formData.get("id") as string;
    const pathToRevalidate = formData.get("path-to-revalidate");

    await deleteListing(tenantId, id, userId);

    if (pathToRevalidate) {
      revalidatePath(`/studios/${tenantId}${pathToRevalidate}`);
    }

    return {
      success: true,
      message: `Successfully deleted!`,
    };
  } catch (error) {
    return catchServerActionError(error);
  }
};
