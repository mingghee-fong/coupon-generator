export default function CouponListItem() {
  return (
    <div>
      <form>
        <input aria-label="Start Editing" type="text" value="" />
        <button type="submit">Save</button>
        <button type="button">Stop Editing</button>
      </form>

      <p>
        <span>
          <button>Rename</button>
          <button>Delete</button>
        </span>
      </p>
    </div>
  )
}
