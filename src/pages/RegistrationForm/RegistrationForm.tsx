import React from "react";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";

const RegistrationForm = () => {
  return (
    <div className="container my-8">
      <form className="w-2/4 border-2 mx-auto p-7 rounded-3xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Registration Form
        </h2>
        <div className="flex w-full gap-4 mb-5">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
        </div>
        <div className="flex w-full gap-4 mb-5">
          <Input type="email" label="Email" />
        </div>
        <div className="flex w-full gap-4 mb-5">
          <Input type="password" label="Password" />
        </div>
        <div className="flex w-full gap-4 mb-5">
          <RadioGroup label="Select your Gender" orientation="horizontal">
            <Radio className="ml-2" value="male">
              Male
            </Radio>
            <Radio className="ml-2" value="female">
              Female
            </Radio>
            <Radio className="ml-2" value="other">
              Other
            </Radio>
          </RadioGroup>
        </div>
        <div className="mt-6">
          <Button className="rounded-3xl" color="secondary">
            Secondary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
