import "./css/clone.style.css";

export default function CloneLoader({ label = "loading" }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex flex-col gap-x items-center justify-center z-[1000]">
      <div className="w-28 h-28 bg-white flex flex-col rounded-xl items-center justify-center gap-y-2">
        <div className="flex items-center justify-center pl-4">
          <div className="clones-2" />
        </div>
        <p className="text-sm">
          {label}
          <span className="type">
            <span>...</span>
          </span>
        </p>
      </div>
    </div>
  );
}
