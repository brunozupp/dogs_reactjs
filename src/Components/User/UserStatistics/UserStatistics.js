import React from 'react'
import { STATS_GET } from '../../../API/api'
import useFetch from '../../../Hooks/useFetch'
import Head from '../../Head/Head'
import Error from '../../Helper/Error/Error'
import Loading from '../../Loading/Loading'

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs/UserStatsGraphs'))

const UserStatistics = () => {

    const {data, error, loading, request} = useFetch();

    const getData = React.useCallback(async function getData() {
        const {url, options} = STATS_GET();

        await request(url, options);
    }, [request]);

    React.useEffect(() => {
        getData();
    }, [getData]);

    if(loading) return <Loading />

    if(error) return <Error error={error} />

    if(data)
        return (
            <React.Suspense fallback={<div></div>}>
                <Head title="Estatísticas" />
                <UserStatsGraphs data={data} />
            </React.Suspense>
        );
    
    return null;
}

export default UserStatistics
