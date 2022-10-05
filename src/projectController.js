import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { Auth } from "aws-amplify";

async function getProjects() {
  const params = {
    TableName: "Projects",
    Key: {
      uuid: { S: "abc123" },
    },
  };
  const config = Auth.configure();
  const credentials = await Auth.currentCredentials();
  const client = new DynamoDBClient({
    region: config.region,
    credentials: Auth.essentialCredentials(credentials),
  });
  const command = new GetItemCommand(params);
  const response = await client.send(command).then((res) => {
    console.log(res);
  });
}

async function getProject(uuid) {
  const params = {
    TableName: "Projects",
    Key: {
      uuid: { S: uuid },
    },
  };
  const config = Auth.configure();
  const credentials = await Auth.currentCredentials();
  const client = new DynamoDBClient({
    region: config.region,
    credentials: Auth.essentialCredentials(credentials),
  });
  const command = new GetItemCommand(params);
  return await client.send(command).then((res) => {
    return res.Item;
  });
}

export { getProjects, getProject };
