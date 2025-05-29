import { useActionState } from "react";

function UseActionState() {

  const handleSubmit = async (prev, formData) => {
    const name = formData.get("name");
    const password = formData.get("password"); // FIXED
    console.log(name, password);
    // return null; // return something to prevent React warnings
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <>
      <h1>useActionState hook</h1>
      <form action={action}>
        <input type="text" placeholder="enter-name" name="name" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default UseActionState;
