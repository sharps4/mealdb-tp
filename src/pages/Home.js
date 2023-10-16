import React from 'react'
import MealList from '../components/MealList'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import Api from '../components/api'
import Searchbar from '../components/Searchbar'

function Home() {
  const { search } = useParams();
  const [meals, setMeals] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      if (search) {
        Api.getApiResult(setMeals, 'search.php', { s: search });
      } else {
        Api.getAllMeals((data) => setMeals(data));
      }
    };

    fetchData();
  }, [search]);
  return (
    <>
      <Header></Header>
      <Searchbar></Searchbar>
      <main>
        <div className='container'>
          {/* <h1>Home</h1> */}
          <MealList meals={meals}></MealList>
        </div>
      </main>
    </>
  )
}

export default Home;