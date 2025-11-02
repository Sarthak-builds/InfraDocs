import { twMerge } from "tailwind-merge";
export default function Pointer (props: {
    name: string;
    color?: "red" | "blue";
}) {

    const { name, color} = props;
    return <>
    <div className="relative">
  <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-12" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8,8)"><path d="M9,2.59375v25.5625l1.65625,-1.375l4.03125,-3.375l2.03125,4.03125l0.4375,0.90625l0.90625,-0.46875l3.09375,-1.59375l0.875,-0.4375l-0.4375,-0.90625l-1.84375,-3.625l5.0625,-0.625l2.03125,-0.25l-1.4375,-1.4375l-14.6875,-14.71875zM11,7.4375l11.5625,11.53125l-4.5,0.53125l-1.40625,0.1875l0.65625,1.28125l2.0625,4l-1.3125,0.6875l-2.15625,-4.3125l-0.59375,-1.125l-0.96875,0.8125l-3.34375,2.8125z"></path></g></g>
</svg>
<div className="absolute top-full left-full">
    <div className={twMerge("inline-flex font-bold rounded-full text-sm bg-blue-500 px-2 rounded-tl-none", color==='red' && "bg-red-500")}> {name} </div>
</div>
    </div>
    </>
}