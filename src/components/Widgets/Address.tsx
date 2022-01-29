import { TOKENS } from "@config/tokens";
import { useClipboard } from "@hooks/useClipboard";
import { Address } from "../../types";
import { Button } from "@components/Button";
import Image from "next/image";
interface Props {
  address: Address;
}

export function Address({ address }: Props) {
  const token = TOKENS.find((token) => token.id === address.id)!;
  const { copied, copy } = useClipboard();
  return (
    <div className="flex items-center justify-between gap-2 p-2 border rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          height={30}
          width={30}
          className="rounded-full"
          alt={token.name}
          src={token.iconURL}
        />
        <p className="font-bold"> {token.name}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={() => copy(address.address)} size="sm">
          {copied ? "Copied Address" : "Copy Address"}
        </Button>
      </div>
    </div>
  );
}
