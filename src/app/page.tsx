import PixelTablet from "@/components/Frames/PixelTablet"
import Pixel8Pro from "@/components/Frames/Pixel8Pro"

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center p-8">
      <PixelTablet svgClassName="max-md:hidden max-w-full max-h-full ">
        <div className="w-full h-full border rounded-2xl p-2">Hello World!</div>
      </PixelTablet>
      <Pixel8Pro svgClassName="md:hidden max-w-full max-h-full">
        <div className="w-full h-full border rounded-[60px] p-8 text-2xl">Hello World!</div>
      </Pixel8Pro>
    </div>
  )
}
