"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Yaml = require("js-yaml");
const fs = require("fs");
const swagger_enpoint_builder_1 = require("./swagger-enpoint-builder");
const json_schema_builder_1 = require("./json-schema/json-schema-builder");
class SwaggerGenerator {
    constructor(specification) {
        this.specification = specification;
    }
    export(folder) {
        const swag = {
            swagger: "2.0",
            info: {
                version: "0.0.0",
                title: "Elasticsearch swagger documentation"
            },
            paths: new swagger_enpoint_builder_1.SwaggerEndpointBuilder(this.specification).build(),
            definitions: new json_schema_builder_1.JsonSchemaBuilder(this.specification).build()
        };
        const swaggerRoot = Yaml.safeDump(swag, { noRefs: true, lineWidth: 400, skipInvalid: true });
        const f = __dirname + "/" + folder;
        fs.writeFileSync(f + "/index.yml", swaggerRoot);
        fs.writeFileSync(f + "/index.json", JSON.stringify(swag));
    }
}
exports.SwaggerGenerator = SwaggerGenerator;
//# sourceMappingURL=swagger-generator.js.map