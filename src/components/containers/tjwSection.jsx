



export default function tjw_Section({title = null, element}){
    return(
        <>
            <section>
                <summary>
                    {title}
                </summary>
                {element}
            </section>
        </>
    )
}