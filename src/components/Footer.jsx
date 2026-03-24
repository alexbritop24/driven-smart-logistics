const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-dsl-orangeSoft">
            Driven Smart Logistics
          </p>
          <p className="mt-2 text-sm text-dsl-gray">
            Premium dispatch support for hotshot drivers, semi trucks, owner operators, and
            small fleets.
          </p>
        </div>

        <div className="text-sm text-dsl-gray">
          <p>Email: your@email.com</p>
          <p>Phone: (000) 000-0000</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer