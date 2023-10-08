import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
   
  export default function BlogCard({prod}) {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={prod.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {prod.title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {prod.description}
          </Typography>
        </CardBody>
       
      </Card>
    );
  }
  