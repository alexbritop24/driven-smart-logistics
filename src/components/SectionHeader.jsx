const SectionHeader = ({ tag, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignment}>
      {tag ? <span className="tag-pill">{tag}</span> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-dsl-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-dsl-gray sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader