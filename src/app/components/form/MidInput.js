export default function MidInput({ data }) {
  return (
    <>
      <input list="mid" name="mid" type="number" className="form-input" />
      <datalist id="mid">
        <option value="50126">NVW50M-NUVO Wet Wipes Merah 50s</option>
        <option value="50127">NUVO Wet Wipes Biru 50s</option>
        <option value="60986">SOKLIN LIQUID DET VIOLET PCH 100ML</option>
        <option value="60987">SOKLIN LIQUID DET ANTI BAC PCH 230ML</option>
      </datalist>
    </>
  );
}
