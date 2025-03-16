import './snowflake.css'

const Snowflakes = () => {
  return (
    <div className="snowflakes-container">
      <div className="snowflakes" aria-hidden="true">
        {[...Array(11)].map((_, i) => (
          <div key={i} className="snowflake">
            <div className="inner">❅</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Snowflakes
