import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";

export default function SettingsPage () {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Profile settings
      </h1>
      <form action="">
        <div className="flex gap-4 items-center">
          <div>
            <div className="bg-gray-400 size-24 rounded-full"></div>
          </div>
          <div>
            <Button variant="surface">
              <CloudUploadIcon />
              change avatar
            </Button>
          </div>
        </div>
        <p className="font-bold">username</p>
        <TextField.Root placeholder="your_username" />
        <p className="font-bold">name</p>
        <TextField.Root placeholder="your_name" />
        <p className="font-bold">subtitle</p> 
        <TextField.Root placeholder="Graphic designer"/>
        <p className="font-bold">bio</p>
        <TextArea />
        <div className="mt-4 justify-center flex">
          <Button variant="solid">Save settings</Button>
        </div>
      </form>
    </div>
  )
}