import { useState } from "react";

function TurKart({turSil,tur}){


    const [devaminiOku, devaminiOkuGuncelle] = useState(false);
  

  

    return(
        <>
        <div className="tur">
            <img src={tur.image} alt="" />
        
        {tur.name}

        

        <p>
          {devaminiOku ? tur.info : `${tur.info.substring(0, 200)}...`}
          <button onClick={() => devaminiOkuGuncelle(!devaminiOku)}>
            {devaminiOku ? 'Kısalt' : '  Devamını oku'}
          </button>
        </p>

        {tur.price}


        <div className="tursil">
        <button onClick={()=>{turSil(tur.id)}}>TURU SİL</button>
        </div>
        
        
        </div>
        
        </>
    )
}

export default TurKart;