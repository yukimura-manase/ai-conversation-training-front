import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card"
import { ScrollArea } from "@/components/shared/ui/scroll-area"
import { Badge } from "@/components/shared/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/shared/ui/avatar"

interface Item {
  id: number
  name: string
  description: string
  image: string
  hobby: string
  location: string
  age: number
}

const items: Item[] = [
  {
    id: 1,
    name: "Alice Johnson",
    description: "Enthusiastic web developer with a passion for UI/UX design.",
    image: "https://i.pravatar.cc/150?img=1",
    hobby: "Photography",
    location: "New York, USA",
    age: 28
  },
  {
    id: 2,
    name: "Bob Smith",
    description: "Experienced data scientist specializing in machine learning algorithms.",
    image: "https://i.pravatar.cc/150?img=2",
    hobby: "Chess",
    location: "London, UK",
    age: 35
  },
  {
    id: 3,
    name: "Carol Martinez",
    description: "Creative graphic designer with a keen eye for detail.",
    image: "https://i.pravatar.cc/150?img=3",
    hobby: "Painting",
    location: "Paris, France",
    age: 31
  },
  {
    id: 4,
    name: "David Lee",
    description: "Innovative software engineer focused on blockchain technology.",
    image: "https://i.pravatar.cc/150?img=4",
    hobby: "Rock Climbing",
    location: "San Francisco, USA",
    age: 29
  },
  {
    id: 5,
    name: "Eva Chen",
    description: "Skilled project manager with a track record of successful product launches.",
    image: "https://i.pravatar.cc/150?img=5",
    hobby: "Yoga",
    location: "Singapore",
    age: 33
  }
]

export default function Component() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle>Detailed Item List</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="">
          {items.map((item) => (
            <Card key={item.id} className="m-4 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 p-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-sm mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{item.hobby}</Badge>
                    <span className="text-sm text-muted-foreground">Age: {item.age}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}