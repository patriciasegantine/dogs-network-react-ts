import React, { useEffect, useState } from 'react';
import { Head } from "../../../components/helper/head";
import { UseFetch } from "../../../hooks/useFetch";
import { METRICS_GET } from "../../../@api/api";
import { ErrorMessage } from "../../../global.styles";
import { Loading } from "../../../components/helper/loading/loading";
import { UserGraphs } from "./user-graphs";

export const UserMetrics: React.FC<any> = () => {
  
  const [graph, setGraph] = useState<any[]>([])
  const [total, setTotal] = useState<number>(0)
  
  const {data, error, loading, request} = UseFetch()
  
  useEffect(() => {
    
    const graphData = data?.map((item: { title: any; acessos: any; }) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    
    setGraph(graphData)
    setTotal(data?.map((photo: { acessos: any; }) => Number(photo.acessos))?.reduce((a: any, b: any) => (a + b), 0))
  }, [data])
  
  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token')
      const {url, options} = METRICS_GET(token)
      
      await request(url, options)
    }
    
    getData()
    
  }, [request])
  
  return (
    <>
      <Head title={'Metrics'}/>
      
      {loading
        ? <Loading/>
        : <UserGraphs
          data={data}
          graph={graph}
          total={total}
        />
      }
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
