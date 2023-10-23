"use client";

export default function ReservationForm() {
  return (
    <form
      className="flex flex-col gap-9 max-lg:gap-5 max-md:gap-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid grid-cols-2 gap-7 max-xl:gap-4 max-md:grid-cols-1 max-md:gap-6">
        <input
          type="text"
          className="input-style placeholder:text-[#C0C0C0]"
          placeholder="Name"
        />
        <input
          type="email"
          className="input-style placeholder:text-[#C0C0C0]"
          placeholder="Email"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 max-xl:gap-3 max-md:grid-cols-1 max-md:gap-6">
        <input
          type="text"
          className="input-style placeholder:text-[#C0C0C0]"
          placeholder="Person"
        />
        <input
          type="text"
          className="input-style placeholder:text-[#C0C0C0]"
          placeholder="Timing"
        />
        <input
          type="text"
          className="input-style placeholder:text-[#C0C0C0]"
          placeholder="Date"
        />
      </div>
      <button
        className="mx-auto btn-white w-fit bg-white border-transparent
       text-[#292E36] py-5 px-12 text-[22px] leading-[27.83px] max-lg:py-3 max-lg:px-6 max-lg:text-lg"
      >
        Book a Table
      </button>
    </form>
  );
}
