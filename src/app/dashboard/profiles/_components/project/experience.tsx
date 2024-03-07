import {Card , CardContent , CardFooter , CardHeader} from "@/components/ui/card";
import {formateDate} from "@/app/_common/utils";


export interface IExperience {
    position_title: string,
    host: string,
    description: string,
    end_date: string,
    start_date: string
}

export function Experience(data: IExperience) {
    const formatedDate = formateDate(data.start_date, data.end_date);
    return(
        <Card>
            <CardHeader>
                <div className="flex flex-col">
                    <div className="flex items-center ">
                         <span className="flex-1 text-lg font-bold">
                             {data.position_title}
                         </span>
                        <span className="text-sm font-light">
                             {formatedDate}
                        </span>
                    </div>
                    <p className="text-lg text-gray-500">{data.host}</p>
                </div>
            </CardHeader>
            <CardContent className=''>
                    {data.description}
            </CardContent>

        </Card>
    )
}
