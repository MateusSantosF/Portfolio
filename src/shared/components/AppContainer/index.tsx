

function AppContainer({children}:{children:React.ReactNode}){
    return (
        <div className="container max-md:px-6">
           {children}
        </div>
    )
}

export default AppContainer;