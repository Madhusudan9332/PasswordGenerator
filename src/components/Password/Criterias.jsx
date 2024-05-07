
const Criterias = ({allCriterias, criterias, handleCriterias}) => {
    return (
        <>
             <div className="border border-gray-400 p-4">
          <h1 className="text-xl font-bold mb-4">Select Criterias</h1>
          {allCriterias.map((values, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <label htmlFor={values}>{values}</label>
                  <input
                    type="checkbox"
                    id={values}
                    checked={criterias[values]}
                    onChange={handleCriterias}
                  />
                </div>
                <hr className="text-black border-gray-400"/>
              </>
            );
          })}
        </div>
        </>
    )
}

export default Criterias