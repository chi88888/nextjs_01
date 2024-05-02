function ToudoFilter( {setFilter}:any ) {
    return (
        <div>
            <button onClick={() => setFilter('all')}>全部</button>
            <button onClick={() => setFilter('active')}>没切换</button>
            <button onClick={() => setFilter('completed')}>切换</button>
        </div>
    )
}
export default ToudoFilter