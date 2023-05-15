import { Box, Image, Text, Flex} from "@chakra-ui/react";
//import latency from 'src/img/latency.jpg';

export default function NoSQLSpark() {
    return (
        <Box align={'center'} minH="100vh" p={5} bg='#F0EFE2'>
            <Box w='94%' bg='white' boxShadow={'dark-lg'} rounded='md' >
                <Text fontWeight={'bold'} fontSize='40' align={'left'} ms='50px' mt='10px'>NoSQL and It's Relationship To Spark</Text>
                <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Reliability</Text>
                <Text align={'left'} ms='-3px' width='94%'>Deciding when to use NoSQL vs SQL is essential, as they differ in capabilities, structure, and ideal use cases. When considering 
                    using a relational database like SQL, it will be a great option if the user is looking to build an application structured around a relationship between data tables. SQL works 
                    well when we want to ensure the data is consistent across tables, BUT relational databases aren’t always the best choice regarding flexibility or scaling. 
                </Text>

                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>A non-relational NoSQL database doesn’t use structured tables, but settles for flexible schemas for unstructured data storage. 
                    This gives the user more ability to scale projects as needed. This also means that users will have less control over consistency and data relationships. NoSQL might make 
                    more sense to be used in cases where:
                </Text>
                <Text align={'left'} ms='85px'>● The user requires high performance, particularly read performance: The ways that distributed NoSQL systems such as Cassandra and Riak work 
                    means that the user usually gets very high read performance by adding more boxes. Some go as far as to automatically replicate data across nodes to ensure the user will 
                    always have plenty of copies of data to access
                </Text>
                <Text align={'left'} ms='85px'>● The user requires high availability (HA): data replicates across nodes in NoSQL systems, so the failure of a single node doesn’t necessarily 
                    result in data loss or downtime for the application. This also means the user can easily add or remove nodes from clusters without impacting availability
                </Text>
                <Text align={'left'} ms='-3px' width='94%'>Not only applying to the situations mentioned above, NoSQL saved the internet with the rise of Ecommerce, social media, and the 
                    explosion of user data. As SQL was struggling to manage all the requests, transactions, and activities occurring online, NoSQL is designed to manage lots of traffic and data.
                </Text>
                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>There are several options for NoSQL, such as Cassandra, Redis, Couchbase, DynamoDB, and the most famous one being MongoDB. NoSQL engines 
                    are designed to scale out and leverage cloud computing. When scaling out/horizontally, the user is adding resources to a single node (a computer or server). This means that we can 
                    have one database working on multiple nodes. Scaling out/back in means that we can easily add and remove nodes. NoSQL is the perfect match for cloud in this case, since when it 
                    scales out, the user will be maximizing the scalability benefits of the cloud. SQL can be run on Azure, but the user will be limited in their ability to scale. 
                </Text>
                
                <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>MongoDB</Text>
                <Text align={'left'} ms='-3px' width='94%'>MongoDB is a popular open-source document-oriented database system. It’s designed to store and manage data in a flexible, scalable, and 
                    high-performance manner. It’s commonly used in web applications, mobile apps, and other scenarios where a flexible and scalable database solution is required. It is useful because 
                    it has
                </Text>
                <Text align={'left'} ms='85px'>● Flexible data models: MongoDB uses a document-based data model, which means that data is stored in flexible and self-descriptive JSON-like documents 
                    called BSON (binary JSON), allowing developers to store, retrieve, and manipulate data in a way that closely resembles the structure of their application’s objects or entities. Based 
                    on the JSON-like documents, fields can vary from document to document and data structure can be changed over time. The document model maps to the object in the application code. With 
                    features such as ad hoc queries, indexing, and real time aggregation, these are powerful ways to access and analyze data. 
                </Text>
                <Text align={'left'} ms='85px'>● Scalability: MongoDB is built to scale horizontally, meaning that it can distribute data across multiple servers or clusters. This allows it to handle 
                    large amounts of data and high traffic loads by adding more servers as needed.
                </Text>
                <Text align={'left'} ms='85px'>● High performance: MongoDB uses efficient indexing and querying techniques to provide fast data retrieval. This supports various types of indexes, 
                such as single-field, geospatial, and compound indexes, enabling optimized and speedy queries. 
                </Text>
                <Text align={'left'} ms='85px'>● Rich query language: MongoDB offers a powerful query language that supports a wide range of operations, including filtering, sorting, aggregation, 
                    and text search. It also supports complex queries and joins through the use of the Aggregation Framework
                </Text>
                <Text align={'left'} ms='-3px' width='94%'>With over 30 million downloads and 4,300 customers, MongoDB is the most popular non-relational database. Users have access to a broad 
                    array of query, projection, and update operators supporting analytical queries against live operational data, supporting tunable consistency to balance performance against data freshness. 
                </Text>

                <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>MongoDB and Spark</Text>
                <Text align={'left'} ms='-3px' width='94%'>Combining the leading analytics processing engine with the fastest-growing database allows users to discover real time analytics and machine learning. 
                    Spark jobs can be executed directly against operational data managed by MongoDB without the expense and time of ETL processes. MongoDB is able to efficiently index and serve analytics results 
                    back into live, operational processes, providing manage benefits to teams tasked with delivering modern, data driven applications. By integrating the Spark engine with MongoDB’s rich analytics 
                    capabilities, this can extend the real-time processing of operational data managed by MongoDB.
                </Text>
                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>Since Spark supports over 100 different operators and algorithms for processing data, developers can use these to perform advanced computations that would 
                    otherwise require more programmatic effort combining MongoDB’s aggregation framework with application code. Spark offers native support for advanced machine learning algorithms such as k-means clustering 
                    and gaussian mixture models. Spark’s machine learning algorithms can be applied to the log, clickstream, and user data stored in MongoDB to build precisely targeted content recommendations for its readers. 
                    The recommendations are then served back to users through MongoDB as they browse websites.
                </Text>
                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>The Spark connector can take advantage of MongoDB’s aggregation pipeline and rich secondary indexes to extract, filter, and process only the range of data it needs. 
                This is different from typical NosQL datastores that don’t offer either secondary indexes or in-database aggregations. In those cases, Spark would need to extract all data based on simple primary keys, even 
                if a subset of the data is required for the Spark process. This means more processing overhead, more hardware, and longer time-to-insight for the analyst. Spark connector will be made aware of data locality 
                in a MongoDB cluster to maximize performance across large, distributed datasets. RDDs are automatically co-located with the associated MongoDB shard to minimize data movement across the cluster, and the nearest 
                read preference can be used to route Spark queries to the closest physical node in a MongoDB replica set (reducing latency).
                </Text>


            </Box>
        </Box>
    );
    }