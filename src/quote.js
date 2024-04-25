

export const Quote = ({quote}) => {
  return (
    <div className="w-[400px] text-center mx-auto p-4">
        <p className="font-thin"><span className="text-4xl font-bold">"</span>{quote.text}<span className="text-4xl font-bold">"</span></p>
        <p className="font-semibold font-mono">{quote.author}</p>
    </div>
  )
}

