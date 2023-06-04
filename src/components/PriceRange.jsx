import { Slider } from "primereact/slider";

export default function PriceRange({ value, onChange }) {
  return (
    <div>
      <p>Price</p>

      <ul className="flex justify-content-between list-none p-0 pb-2 m-0">
        <li>100</li>
        <li>500</li>
        <li>1000</li>
      </ul>
      <Slider
        value={value}
        onChange={onChange}
        min={0}
        max={1000}
      />
    </div>
  );
}
