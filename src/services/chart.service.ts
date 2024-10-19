// cpu: https://run.mocky.io/v3/fccb192a-7231-4813-b4cb-c98bd04b5c55
// memoria: https://run.mocky.io/v3/874cf29f-0a46-4b99-9f08-da300e41869d
// status: https://run.mocky.io/v3/1d09ceed-02e9-4220-b42a-0bdaa8c7895d
import axios from 'axios'

export const getCharts = async () => {

  const arrayOfMpromisses = [getCpuInfo(), getMemoryInfo(), getMachineStatus()]

  try {
    const [cpuInfo, memoryInfo, machineStatus] = await Promise.all(arrayOfMpromisses)
    return {
      cpuInfo,
      memoryInfo,
      machineStatus
    }
  } catch (error: any) {
    console.error(error.message)
  }

}

const getCpuInfo = async () => {
  try{
    const {data} = await axios.get<CpuDataResponse>('https://run.mocky.io/v3/fccb192a-7231-4813-b4cb-c98bd04b5c55')
    return data
  } catch(error) {
    Promise.reject(error)
  }
}
const getMemoryInfo = async () => {
  try{
    const {data} = await axios.get<MemoryDataResponse>('https://run.mocky.io/v3/874cf29f-0a46-4b99-9f08-da300e41869d')
    return data
  } catch(error) {
    Promise.reject(error)
  }
}
const getMachineStatus = async () => {
  try{
    const {data} = await axios.get<MachineStatus>('https://run.mocky.io/v3/1d09ceed-02e9-4220-b42a-0bdaa8c7895d')
    return data
  } catch(error) {
    Promise.reject(error)
  }
}


interface ChartsResponse{
  cpu: CpuDataResponse
}

interface CpuDataResponse{
  cpuUtilizationSeries: {timestamp: Date, cpuUtilization: number}[]
}

interface MemoryDataResponse{
  memoryUtilizationSeries: {timestamp: Date, memoryUtilization: number}[]
}
interface MachineStatus{
  status: string
}