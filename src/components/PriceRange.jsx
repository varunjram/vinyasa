import {Slider} from "primereact/slider";

export default function PriceRange({value, onChange}) {
  console.log("value: ", value);
  return (
    <div>
      <p>Price</p>

      <ul className="flex justify-content-between list-none p-0 pb-2 m-0">
        <li>50</li>
        <li>100</li>
        <li>200</li>
      </ul>
      <Slider value={value} onChange={onChange} min={0} max={1000} />
    </div>
  );
}
