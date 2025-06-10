import { db } from './../src/app/lib/db'; // your Drizzle db instance
import { users } from './../src/app/lib/schema'; // your schema
import { eq } from 'drizzle-orm';

async function userSeed() {
  console.log('Seeding database...');

  // Optional: check if already seeded
  const existing = await db.select().from(users).where(eq(users.email, 'admin@example.com'));
  if (existing.length > 0) {
    console.log('Already seeded. Skipping.');
    return;
  }

  // Insert seed data
  await db.insert(users).values([
    {
      id: 1,
      name: 'Admin',
      email: 'admin@example.com',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
    },
  ]);

  console.log('Seeding complete.');
}

userSeed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Error seeding:', err);
    process.exit(1);
  });
