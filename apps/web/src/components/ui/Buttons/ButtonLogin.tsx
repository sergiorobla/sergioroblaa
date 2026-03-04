// ButtonTheme.tsx
import { useState } from "react";
import Button from "../../../components/ui/Buttons/Button";
import { Menu, X } from "lucide-react";
import MenuDesp from "../Menu/MenuDesp";

export default function ButtonTheme() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        type="button"
        className="w-10 h-10 flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <MenuDesp open={open} />
    </div>
  );
}