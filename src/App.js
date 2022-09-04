import { useEffect, useState } from "react";
import TurKart from "./TurKart";

function App(){

    const [turBilgileri,turBilgileriGuncelle]=useState(null);

    useEffect(()=>{
        const veriCek= async ()=>{
            const turFetch= await fetch("tours.json");
            const turJson= await turFetch.json();
            
            turBilgileriGuncelle(turJson);
        }

        veriCek();
    },[])

    console.log(turBilgileri);

    const turSil = (id) => {
        const yeniTurlar = turBilgileri.filter((tour) => tour.id !== id);
        turBilgileriGuncelle(yeniTurlar);
      }

    return(
        <>
        

        <div className="container">
        <h1>Turlarımız</h1>
        {turBilgileri&&turBilgileri.map((tur)=><p key={tur.id}><TurKart tur={tur}  turSil={turSil}/></p>)}
        </div>
            
          
           
        
        </>
    )
}

export default App;