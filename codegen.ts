import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3001/graphql",
    documents: ["./app/**/*.query.graphql.ts", "./app/**/*.graphql.ts", "./src/**/*.mutation.graphql.ts"],
    generates: {
        "./app/components/shared/apollo/schema/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
};

export default config;