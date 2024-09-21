import Image from "next/image";

interface KimeraAvatorProps {
  name: string;
  image_url: string;
}

export const KimeraAvatar = ({ name, image_url }: KimeraAvatorProps) => {
  return (
    <div>
      <img src={image_url} alt={name} width={400} height={400} />
    </div>
  );
};
