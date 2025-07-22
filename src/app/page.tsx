import PixelTablet from "@/components/Frames/PixelTablet"

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <PixelTablet>
        <div className="w-full h-full border rounded-2xl p-2 bg-black">Hello World!</div>
      </PixelTablet>
    </div>
  )
}
