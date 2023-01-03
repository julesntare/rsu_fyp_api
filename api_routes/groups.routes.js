const express = require("express");
const {
    getAllGroups,
    getGroupById,
    createGroup,
    changeGroupStatus,
    updateGroup,
    changeGroupDepartment,
    removeGroup
} = require("../controllers/groups.controllers");
const router = express.Router();

/**
 * @swagger
 * /api/groups/all:
 *  get:
 *      summary: Request all groups.
 *      tags:
 *          - Group endpoints
 *      parameters: []
 *      responses:
 *          200:
 *              description: Success
 *          404:
 *              description: Not found
 *          500:
 *              description: Internal server error
 */
router.get("/all", getAllGroups);

/**
 * @swagger
 * /api/groups/{id}:
 *  get:
 *      summary: Request a group by id.
 *      tags:
 *          -   Group endpoints
 *      parameters:
 *          -   name: id
 *              in: path
 *              required: true
 *              type: string
 *      responses:
 *          200:
 *              description: Returned details for specified group (json format)
 *          400:
 *              description: Group not found
 *          500:
 *              description: Internal Server Error
 */
router.get("/:id", getGroupById);

/**
 * @swagger
 * definitions:
 *      Group:
 *          type: object
 *          required:
 *              - group_name
 *              - group_year
 *              - department
 *          properties:
 *              group_name:
 *                  type: string
 *                  description: Group name
 *              group_description:
 *                  type: string
 *                  description: Group description
 *              group_year:
 *                  type: integer
 *                  description: Group year
 *              department:
 *                  type: string
 *                  description: Department id
 *              class_presenter:
 *                  type: string
 *                  description: Class presenter id
 *              class_size:
 *                  type: integer
 *                  description: Class size
 *          example:
 *              group_name: "Year 4 Computer Science"
 *              group_description: "Year 4 group"
 *              group_year: 4
 *              department: "5f9f1b9b0b5c3c0b8c8b8b5d"
 *              class_presenter: "5f9f1b9b0b5c3c0b8c8b8b5d"
 *              class_size: 30
 */

/**
 * @swagger
 * /api/groups/create:
 *  post:
 *      summary: Create a new group.
 *      tags:
 *          - Group endpoints
 *      security: []
 *      produces:
 *          - application/json
 *      parameters: []
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Group'
 *      responses:
 *          201:
 *              description: Created
 *          400:
 *              description: Bad Request
 *          404:
 *              description: Not Found
 *          500:
 *              description: Internal Server Error
 *          401:
 *              description: Unauthorized
 */
router.post("/create", createGroup);

module.exports = router;