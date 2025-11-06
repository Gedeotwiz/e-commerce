import GContainer from "../Share/GContainer"
import GText from "../Share/GText"

export const Summary = () =>{
    const items=[
        {name:"Subtotal",value:"US $879.99"},
         {name:"Shipping fee",value:"US $12.99"},
          {name:"Total",value:"US $892.02"}
    ]
    return (
        <GContainer>
            <GText>Summary</GText>
            <GContainer>
                {items.map((item,index)=>(
                    <GContainer key={index}>
                <GText>{item.name}</GText>
                <GText>{item.value}</GText>
                </GContainer>
                ))}
               
            </GContainer>
        </GContainer>
    )
}