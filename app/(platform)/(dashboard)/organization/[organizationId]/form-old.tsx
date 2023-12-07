"use client"

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/ues-action";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export const Form = () => {
  // const initialState = { message: "", errors: {}};
  // const [state, dispatch] = useFormState(create, initialState);
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data, 'Success');
    },
    onError(error) {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData)=>{
    const title = formData.get("title") as string;

    execute({title});
  }

  return (
    <form action={onSubmit}>
        <div className="flex flex-col space-y-2">
          <FormInput
            id="title"
            label="Board Title"
            errors={fieldErrors}
          />
        </div>
        <FormSubmit>
          save
        </FormSubmit>
      </form>
  )
}