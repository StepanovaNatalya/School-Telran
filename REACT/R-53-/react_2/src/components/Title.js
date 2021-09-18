export default function Title(propse){
    console.log(propse)
    return(
        <h1>{propse.title ?? 'hello world'}</h1>
    )
}