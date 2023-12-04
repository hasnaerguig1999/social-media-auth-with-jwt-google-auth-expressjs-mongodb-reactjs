
import { TextField } from "@mui/material"
import { InitialStateT, PostForm } from "../types/Types"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { useEffect } from "react"
import { toBase64 } from "../utils"
import { saveUpdatePost , createPostAsync } from "../redux/store/Actions/PostAction"

const FormComp = () => {

const post = useSelector(state => state.posts.post.data)
  const variant = useSelector<InitialStateT, string>(state => state.posts.post.variant)

  const {
    control,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: post,
    mode: 'onTouched'
  })

  const dispatch : Dispatch = useDispatch();
  const onSubmit: SubmitHandler<PostForm> = async (data) => {
    if (variant === "add") {
      dispatch(createPostAsync(data));
    }
    if (variant === 'update') {
      const updateAction = saveUpdatePost(data);
      dispatch(updateAction);
    }
  };
  

  useEffect(() => {
    reset(post)
  }, [post])
  

  return (
    <>
      <div
        className="bg-white shadow-[#ccc] shadow-[0px_1px_4px] w-full mx-auto py-4 px-6 text-center"
      >
        <h3 className="font-[sans-serif] my-2">Creating a Memory</h3>
        <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            rules={{ 
              required: { value: true, message: "Title must not be empty" }, 
              minLength : {value : 3, message : "Title must be more than 3 character"},
              maxLength : {value : 30, message : "Title must be less than 30 character"},
              pattern : {value : /[a-zA-Z0-9]/g, message : "Title cant contain white space"}
            }}
            render={({
              field,
              fieldState: { invalid, error }
            }) => (
              <TextField {...field} error={ invalid } label="Title" variant="outlined" helperText={error?.message} />
            )}
          />

          <Controller
            name="creator"
            control={control}
            rules={{ 
              required: { value: true, message: "Creator must not be empty" },
              minLength : {value : 3, message : "Creator must be more than 3 character"},
              maxLength : {value : 20, message : "Creator must be less than 20 character"},
              pattern : {value : /[a-zA-Z0-9]/g, message : "Creator cant contain white space"}
            }}
            render={({
              field,
              fieldState: { invalid, error }
            }) => <TextField {...field} error={invalid} helperText={error?.message} label="Creator" variant="outlined" />}
          />
          <Controller
            name="message"
            control={control}
            rules={{ 
              required: { value: true, message: "Message must not be empty" } ,
              pattern : {value : /[a-zA-Z0-9]/g, message : "Message cant contain white space"}
            }}
            render={({
              field,
              fieldState: { invalid, error}
            }) => <TextField {...field} error={ invalid } helperText={error?.message} label="Message" multiline rows={2} fullWidth variant="outlined" />}
          />
          <Controller
            name="tags"
            control={control}
            rules={{ 
              required: { value: true, message: "Tags must not be empty" },
              pattern : {value : /^\s*([^,\s]+(?:\s*,\s*[^,\s]+)*)\s*$/, message : "Tages must be separate it with ' , ' "}
            }}
            render={({
              field,
              fieldState: { invalid, error}
            }) => <TextField {...field} error={ invalid } helperText={error?.message} label="Tages" variant="outlined" className="h-10" />}
          />
          <div className="flex flex-col mt-2">
            <Controller
              name="picture"
              control={control}
              rules={{ 
                required: { value: true, message: "Picture must not be empty" },
              }}
              render={({
                field,
                fieldState: { error }
              }) =>
                <>
                  <input
                    type="file"
                    onChange={async (e) => field.onChange(await toBase64(e.target.files?.[0]))}
                    className="block w-full text-sm text-gray-900 mt-4"
                  />
                  {error && <p className="text-red-500 text-sm text-left">{error.message}</p>}
                </>
              }
            />
            <button className="bg-[#3b5998] mt-3 hover:bg-[#3b5998] text-white text-sm font-semibold py-2 px-4 border border-[#3b5998] rounded">
              SUBMIT
            </button>
            <button className="bg-[#f40057] mt-3 hover:bg-[#f40057] text-white text-sm font-semibold py-2 px-4 border border-[#f40057] rounded">
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormComp