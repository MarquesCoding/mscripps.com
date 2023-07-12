import range from 'lodash.range';
const Flag: React.FunctionComponent = () => {

    const numberOfColumns = 8;
    const staggeredDelay = 45;

    return (
        <div className="flag w-12">
            {range(numberOfColumns).map((column) => (
                <div
                    key={column}
                    className="column h-8"
                    style={{
                        animationDelay: column * staggeredDelay + 'ms',
                    }}
                />
            ))}
        </div>
    )
}
export default Flag;