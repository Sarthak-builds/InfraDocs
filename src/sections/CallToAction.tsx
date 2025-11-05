

export default function CallToAction() {
    return <section className="py-24">
        <div className="overflow-x-clip p-4 ">
            <div>
        {Array.from({length:10}).map((_,i)=> (
  <div key={i}>
            <span>*</span>
            <span> Try it for free!</span>
        </div>
        ))}
      </div>
      </div>
    </section>;
}
