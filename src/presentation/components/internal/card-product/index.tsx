import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardFooter, CardHeader } from "../../external/card";
import { CardProductProps } from "./types";
import { cn } from "@/helpers/utils";
import { Heart } from "./components/Heart";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "../../external/button";
import { useState } from "react";
import noImage from "../../../../assets/noImage.jpg";

export function CardProduct({
  product,
  className,
  valueOf,
  valuePer,
  inStock,
}: CardProductProps) {
  const [isLoading, setIsLoading] = useState(false);

  const hasProduct = !!product;
  const hasTitle = !!product?.title;

  const initialValue = valueOf?.replace(",", ".");
  const discountedRate = valuePer?.replace(",", ".");

  const porcentage = initialValue
    ? (((+initialValue - +discountedRate) / +discountedRate) * 100).toFixed()
    : "";

  function handleLoading() {
    setIsLoading(!isLoading);
  }

  return (
    <Card className={cn("max-w-[250px]", className)}>
      <CardHeader>
        <Heart />
        {hasProduct && (
          <div className="flex flex-col gap-6 relative">
            {product.image ? (
              <Avatar>
                <AvatarImage
                  src={product.image}
                  className="rounded-md object-fit: contain"
                />
              </Avatar>
            ) : (
              <img src={noImage} alt="no image" className="rounded-md" />
            )}
            <span className="text-base font-bold">
              {hasTitle ? product.title : "No result for title"}
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div>
          {valueOf && (
            <div className="flex items-center gap-8">
              <span className="text-sm line-through">De: R$ {valueOf}</span>
              <span className="px-3 rounded-3xl bg-[#C46600] text-white font-black">
                - {porcentage}%
              </span>
            </div>
          )}
        </div>
        <div>
          {valueOf ? (
            <div className="flex flex-col mt-2">
              <span className="text-sm">Por: R$ {valuePer} / kg</span>
              <span className="text-xl font-black">R$ {valuePer}</span>
            </div>
          ) : (
            <span className="text-xl font-black">R$ {valuePer}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="-mt-3">
        <Button
          className=" w-full bg-[#41873F] hover:bg-[#30662e] "
          onClick={handleLoading}
          disabled={!inStock}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <span className="flex items-center gap-4">
              <ShoppingCart /> Adicionar
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
