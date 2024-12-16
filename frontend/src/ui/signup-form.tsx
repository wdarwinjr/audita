'use client'
 
// import { signup } from '../actions/auth'
import { useActionState } from 'react'
import { useState } from 'react'
import {Form, Input, Button} from "@nextui-org/react";

// export default function SignupForm() {

//   const [state, action, pending] = useActionState(signup, undefined)
 
//   return (
//     <form action={action} className='styles.form'>
//       <div>
//         <label htmlFor="name" className='styles.label'>Name</label>
//         <input id="name" name="name" placeholder="Name" />
//       </div>
//       {state?.errors?.name && <p>{state.errors.name}</p>}
 
//       <div>
//         <label htmlFor="email" className='styles.label'>Email</label>
//         <input id="email" name="email" placeholder="Email" />
//       </div>
//       {state?.errors?.email && <p>{state.errors.email}</p>}
 
//       <div>
//         <label htmlFor="password" className='styles.label'>Password</label>
//         <input id="password" name="password" type="password" />
//       </div>
//       {state?.errors?.password && (
//         <div>
//           <p>Password must:</p>
//           <ul>
//             {/ * {state.errors.password.map((error) => ( * /}
//               <li key={error}>- {error}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button disabled={pending} type="submit">
//         Sign Up
//       </button>
//     </form>
//   )
// }


export default function SignupForm() {

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit}>
      <Input
        isRequired
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
    </Form>
  );
}
