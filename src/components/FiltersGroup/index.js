import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div>
        <input
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button id="searchButton" type="button" onClick={getJobs}>
          <BsSearch />
        </button>
      </div>
    )
  }

  const onRenderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div>
        <h1>Typ eof employment</h1>
        <ul>
          {employmentTypesList.map(eachEmplayeeType => {
            const {changeEmployeeList} = props
            const onSelectEmployeeType = event => {
              changeEmployeeList(event.target.value)
            }
            return (
              <li
                key={eachEmplayeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              >
                <input
                  type="checkbox"
                  id={eachEmplayeeType.employmentTypeId}
                  value={eachEmplayeeType.employmentTypeId}
                />
                <label htmlFor={eachEmplayeeType.employmentTypeId}>
                  {eachEmplayeeType.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div>
        <h1>Salary Range</h1>
        <ul>
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li key={eachSalary.salaryRangeId} onClick={onClickSalary}>
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                />
                <label htmlFor={eachSalary.salaryRangeId}>
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <div>
      {renderSearchInput()}
      <ProfileDetails />
      <hr />
      {onRenderTypeOfEmployment()}
      <hr />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
