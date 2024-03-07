import {Card , CardContent , CardDescription , CardFooter , CardHeader , CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Github , LinkIcon} from "lucide-react";
import {Link1Icon} from "@radix-ui/react-icons";

interface IProjectCard {
    url?: string,
    github_url?: string,
    site_url?: string,
    description?: string,
    title: string
}
const image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADICAYAAADBXvybAAAAAXNSR0IArs4c6QAAEg1JREFUeF7tnQVzJbcSRsdhZmZm/v8/IRVmZt4NM+yrM6/kUjrDV/bqWkdVqUrie2XpdH/dLZjxwbPPPnums0lAAieawIFCP9H2dXIS6AkodB1BAg0QUOgNGNkpSkCh6wMSaICAQm/AyE5RAgpdH5BAAwQUegNGdooSUOj6gAQaIKDQGzCyU5SAQtcHJNAAAYXegJGdogQUuj4ggQYIKPQGjOwUJaDQ9QEJNEBAoTdgZKcoAYWuD0igAQIKvQEjO0UJKHR9QAINEFDoDRjZKUpAoesDEmiAgEJvwMhOUQIKXR+QQAMEFHoDRnaKElDo+oAEGiCg0BswslOUgELXByTQAAGF3oCRnaIEFLo+IIEGCCj0BozsFCWg0PUBCTRAQKE3YGSnKAGFrg9IoAECCr0BIztFCSh0fUACDRBQ6A0Y2SlKQKHrAxJogIBCb8DITlECCl0fkEADBBR6A0Z2ihJQ6PqABBogoNAbMLJTlIBC1wck0AABhd6AkZ2iBBS6PiCBBggo9AaM7BQloND1AQk0QEChN2BkpygBha4PSKABAgq9ASM7RQkodH1AAg0QUOgNGNkpSkCh6wMSaICAQm/AyE5RAgpdH5BAAwQUegNGdooSUOj6gAQaIKDQGzCyU5SAQtcHJNAAAYXegJGdogQUuj4ggQYIKPQGjOwUJaDQ9QEJNEBAoTdgZKcoAYWuD0igAQIKvQEjO0UJKHR9QAINEFDoDRjZKUpAoesDEmiAgEJvwMhOUQIKXR+QQAMEFHoDRnaKElDo+oAEGiCg0BswslOUgELXByTQAAGF3oCRnaIEFLo+IIEGCCj0BozsFCWg0PUBCTRAQKE3YGSnKAGFrg9IoAECCr0BIztFCSh0fUACDRDYO6FfddVVHf9ceuml3fnnn9+dc8453T///NP9+eef3c8//9x9//333XfffdedOXNm0nyXXHJJ9/DDD2828aefftp98cUXs98/77zzuquvvrof84UXXtiPmbEx3l9//bX79ttv+zEzh5PYsM+1117bXXHFFR3M4XFwcND9/fff3R9//NHb7PTp091PP/20evqXX355z/ayyy7ruZ577rndX3/91ff7ww8/9P3+9ttvq/u96KKL+n6vvPLKvl/+YbzYjHFisx9//HF1v2fzC3sjdIR91113dRhhrmHoDz74YNIYON79998/19Xoz5cI/brrrutuu+223gGn2u+//96Pd4uzb57AMXxx6fwZCsKBAbabaxdccEF355139sFjrn355ZfdZ599tiiQEpRuueWW7sYbb5zrtg8kH3744aLxznZ2DB/YC6ETXe++++4+E8RGdhz7/++9916f3Ycafd5zzz2bEc8JHYe5+eab/9N/ytw4Vd6Yx9tvv713mWIM4O23397dcMMNgz8esxkZ88033+wIfGMNkT/00EN9lo2NrDsUVBHlO++8M1nl4UMEfqqEoX6xV/QzgtIbb7zRZ/raW/VCv/jii/sSO4dM6fTVV191v/zySx+pMQIGuummm/oyLjV+9vLLL/flXGxkG7JCai+++OJsuZ/3Qd9jy4MYRHBAsgrjTk5BGc8YyB5pbnzutdde25ssMebc119/fXfHHXcc/hhOZFZKaZYrNIRKRiYgIt7UKOURz1CDE76AT6TGsoclFN9LAYSSmyDLUiE1/OXjjz8e1SPjZdypMc7PP//8cFnF76Y/7IV9U8MHGe/cUvFsB4Lqhf7ggw/+S7wfffRR9/XXX49yI/Nfc801hz/HCci+sWEwymoaAnvhhReK2AKHePTRR/v1OI0ggyOMZSmc8r777jv83adOnepL2H1tZNQnnniiD76JLZUKQhxqfJ4MnS/J+DxZOLYYnAken3zyyWC//H64pgyNEF999dVBO/C7H3nkkcOAyxKKMYztm9x66619UkkNe2G3mlvVQidyY4DUyIiU41MNx3n88ccPSzgiM1kytry0pgQj85dobDyxl5Dau+++O7p8SJ/Jy1wc8pVXXtnbrE65znxSmwvMfA4xPvDAA4ffGcu+jz322GEAXZJJqRr4Tgo633zzTb+ujg17YTca4ob/VDlOMCc4pYqBIM53am5VCz06zVtvvbVoDUskJ1PSEM5zzz33Hxvk4hoLBlsMl//upQ5A9schU6PExNnXNhya0jZlR6oJstjQ0iXvm99PQE2CmCqf58Z077339icMSTQsiZacKDz11FOHwZlsTkbNWzwlWZpFcxHDgfHkDdE++eSTh797aUUVqwuSSVqWzDE6Gz+vWug4LLvtHMkQnZfunsb11vPPP/8fZ8tLfEo1NoF2bQgFp0mCmSot4+9CaGntOeToS8cG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"
export function ProjectCard(data: IProjectCard) {
    return(
        <Card>
            <CardHeader>
                <Image

                    src={data.url ? data.url: image}
                    width={350}
                    height={200}
                    alt="project image"
                />
            </CardHeader>
            <CardContent>
                {data.title}
            </CardContent>
            <CardFooter className="flex gap-3">
                <a href={data.github_url} className="hover:text-blue-400 cursor-pointer">
                    <Github />
                </a>
                <a href={data.site_url} className="hover:text-blue-400 cursor-pointer">
                    <LinkIcon />
                </a>
            </CardFooter>
        </Card>
    )
}
