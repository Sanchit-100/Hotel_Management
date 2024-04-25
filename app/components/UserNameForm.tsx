import { useForm } from "react-hook-form";
import { useFormState } from "./FormContext";

type TFormValues = {
  hotelName: string;
  hotelEmailId: string;
  hotelContactNumber: number;
  hotelLandmark: string;
  hotelAddress: string;
  hotelStartingPrice: number;
  hotelDescription: string;
  hotelStarRating: number;
  hotelImageUrl: string;
  hotelState: string;
  hotelCity: string;
  hotelCountry: string;
  hotelRegion: string;
  hotelPincode: string;
};

export function UserNameForm() {
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      {/* Additional fields */}
      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelName">Hotel Name</label>
        <input
          id="hotelName"
          {...register("hotelName")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>

      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelEmailId">Hotel Email ID</label>
        <input
          id="hotelEmailId"
          {...register("hotelEmailId")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>

      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelAddress">Hotel Address</label>
        <input
          id="hotelAddress"
          {...register("hotelAddress")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>

      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelContactNumber">Hotel Contact</label>
        <input
          id="hotelContactNumber"
          {...register("hotelContactNumber")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>

      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelState">Hotel State</label>
        <input
          id="hotelState"
          {...register("hotelState")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="hotelStartingPrice">Hotel Starting Price</label>
        <input
          id="hotelStartingPrice"
          {...register("hotelStartingPrice")}
          className="border h-11 px-4 rounded-md focus:outline-blue-500 "
          required={true}
        />
      </div>
      {/* ... (similarly for other hotel attributes) ... */}
      <div className="flex justify-end">
        <button className="h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md">
          Next
        </button>
      </div>
    </form>
  );
}
