import './Music.css'

function Music({data}) {
    return (
      <div className="Music">
        { data.map((x,i) => {
            return (
                <div className="card" key ={i}>
                    <a href={x.url}><img src={x.image} alt={x.title} width="500" height="600"/></a>
                    <p id='title'>{x.title}</p>
                    <div id='group'>
                        { x.artists.map((artist) => {
                            return <p id='artist'>{artist}</p>
                        })}
                    </div>
                </div>
            )
        })}
      </div>
  );
}

export default Music;