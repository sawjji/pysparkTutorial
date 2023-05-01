import { Box, Image, Text, Flex} from "@chakra-ui/react";
//import latency from 'src/img/latency.jpg';
import HadoopImg from './hadoopmapreduce.jpg'
export default function Homepage() {
  return (
    <Box align={'center'} minH="100vh" p={5} bg='#F0EFE2'>
      <Box w='94%' bg='white' boxShadow={'dark-lg'} rounded='md' >
        <Text fontWeight={'bold'} fontSize='40' align={'left'} ms='50px' mt='10px'>Introduction To Data Applications</Text>
        <Flex mt='25px'></Flex>
        <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>What Are Data-Intensive Applications?</Text>
        <Text align={'left'} ms='50px'>In today’s digital world, many applications are data-intensive rather than compute-intensive. This is crucial as data-intensive applications need to:</Text>
        <Text align={'left'} ms='85px'>● Store data so that they can find it later (database)</Text>
        <Text align={'left'} ms='85px'>● Remember result of expensive operation to speed up reads (caches)</Text>
        <Text align={'left'} ms='85px'>● Allow users to search data by keyword or filter it in various ways (search indexes)</Text>
        <Text align={'left'} ms='85px'>● Send message to another process to be handled asynchronously (stream processing)</Text>
        <Text align={'left'} ms='85px'>● Periodically crunch a large amount of accumulated data (batch processing)</Text>
        <Text align={'left'} ms='85px'>● Trying to achieve reliable, scalable, and maintainable data systems</Text>
        <Text align={'left'} ms='-3px' width='94%'>New tools for data storage and processing have emerged in recent years and are optimized for a variety of different use cases, 
          as they no longer neatly fit into traditional categories. Increasingly, many applications have so many demanding or wide-ranging 
          requirements that a single tool can no longer meet all its data processing and storage needs. This means that work is broken down 
          into tasks that can be performed efficiently on a single tool, and different tools are stitched together using application code. 
          There are now concerns that are important in most software systems:
        </Text>
        <Text align={'left'} ms='85px'>● Reliability: the system should continue to work correctly even in face of adversity (hardware or software faults or human errors)</Text>
        <Text align={'left'} ms='85px'>● Scalability: as the system grows, there should be reasonable ways of dealing with growth</Text>
        <Text align={'left'} ms='85px'>● Maintainability: different people will work on the system and they should be able to work on it productively</Text>

        <Flex mt='25px'></Flex>
        <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Data Applications With Apache Spark</Text>
        <Text align={'left'} ms='-3px' width='94%'>Apache Spark is an open-source, distributed processing system used for big data workloads. It is designed for lightning-fast 
          computations by using in-memory chasing and optimized query execution for fast analytic questions against data of all sizes. The primary abstraction in Spark are 
          Resilient Distributed Datasets (RDD) — a fault-tolerant collection of elements that can be operated in parallel. Data reuse is accomplished through the creation 
          of DataFrames, an abstraction over RDDs. The two types of RDDs are 
        </Text>
        <Text align={'left'} ms='85px'>● Parallelized collections: take existing Scala collection and run functions on it in parallel</Text>
        <Text align={'left'} ms='85px'>● Hadoop datasets: run functions on each record of a file in Hadoop distributed file system or any other storage system supported by Hadoop</Text>
        <Text align={'left'} ms='-3px' width='94%'>The two types of operations on RDDs are transformations (lazy, not computed immediately) and actions. Transformed RDD 
          gets recomputed when an action is run on it by default, but an RDD can be persisted into storage in memory or disk. 
        </Text>        
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>All transformations in Spark are considered lazy, in that they don’t compute their results right away. Instead, they just remember 
        the transformations that are applied to some base dataset. The transformations are only computers when an action requires a result to be returned to the driver program — 
        such action allows Spark to run more efficiently. By default, every transformed RDD may be recomputed each time an action is run on it. You can also persist an RDD in 
        memory, using the persist (or cache) method, in which case Spark will keep the elements around on the cluster for much faster access the next time it is queried. 
        </Text> 
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>
        In the example below, the first line is a base RDD from an external file, and the dataset is not loaded in memory. The first line is a pointer to a file, the second line 
        defines the length as the result of a map transformation (not immediately computed due to the laziness stated above), and when reduce is run, Spark breaks the computation 
        into tasks to run on separate machines, and each machine runs both its part of the map and a local reduction. Finally, it only returns to answer the driver program.
        </Text>        
        <Flex mt='25px'></Flex>
        <Flex align='horizontal' width='94%'>
          <Text mt='14px' fontWeight={'bold'}>In [1]:</Text>
          <Flex w='10px'></Flex>
          <Box w='94%' bg='black' rounded='sm' p={3} mt='4px' ms='13px' align='left'>
            <Flex color='white'>
              <pre>
                {'lines = sc.textFile("data.txt")\nlineLengths = lines.map(lambda s: len(s))\ntotalLength = lineLengths.reduce(lambda a, b: a + b)'}
              </pre>
            </Flex>
          </Box>
        </Flex>
        <Flex mt='15px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>Hadoop MapReduce is a programming model for processing big datasets with a parallel, distributed algorithm. 
          Hadoop is used extensively to analyze datasets since it is based on MapReduce, a simple programming model. Its computation is scalable, flexible, fault-tolerant, 
          and cost effective. A large challenge for MapReduce is the sequential multi-step process it takes to run a job. For each step, MapReduce reads data from the cluster and 
          performs operations, but since each step requires a disk read and write, MapReduce jobs are slower due to disk I/O latency. 
        </Text>
        <Flex mt='25px'></Flex>
        <Box boxSize='sm'>
          <Image src='https://www.tutorialspoint.com/hadoop/images/mapreduce_algorithm.jpg' alt='Dan Abramov' />
        </Box>
        <Flex mt='-190px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>The MapReduce program executed within three stages: map stage, shuffle stage, and reduce stage. The map/mapper’s job is to process 
        the input data during the map stage. The input file is passed to the mapper function line by line. For the reduce stage, it turns into a combination of the shuffle stage 
        and reduce stage, in which the reducer is to process the data that comes from the mapper. After processing the data, a new set of outputs are produced and stored in the HDFS. 
        During a MapReduce job, Hadoop will send the Map and Reduce tasks to the appropriate servers in the cluster. Most of the computing takes place on nodes with data on local 
        disks that reduces the network traffic, and after completion of the given tasks, the cluster will collect and reduce the data to form an appropriate result to send back to 
        the Hadoop server. </Text>
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>To address the limitations, Spark was created to process in-memory, reducing the number of steps in a job, and reuse 
          data across multiple parallel operations. Spark reuses data by using an in-memory cache to speed up machine learning algorithms that repeatedly call a function on the same 
          dataset. Spark isn’t a modified version of Hadoop and is not dependent on Hadoop, as it has its own cluster management (Hadoop is one way to implement Spark).
          Apache Spark is developer friendly and natively supports multiple languages such as Java, Scala, R, and Python, giving you a variety of languages for building your 
          applications. The system has the ability to run multiple workloads, including interactive queries, real-time analytics, machine learning, and graph processing. Just 
          one application is able to combine multiple workloads. 
        </Text>

        <Flex mt='25px'></Flex>
        <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Importance of SQL and NoSQL</Text>
        <Text align={'left'} ms='-3px' width='94%'>The most important part of developing software is the creation of data models, as most applications are built by layering 
          one data model on top of another. A crucial question to consider per layer is how the data is represented in terms of next-lower layers. The best known data model today 
          is SQL (Structured Query Language), where data is organized into relations (tables) where each relation is an unordered collection of tuples (rows). The goal of the relational 
          model was to hide implementation details behind a cleaner interface. 
        </Text>        
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'> A newer alternative to SQL is NoSQL (Not Only SQL), which are non-tabular databases. A few driving forces are:</Text>
        <Text align={'left'} ms='85px'>● Need for greater scalability than relational databases can achieve, including large datasets or high write throughput</Text>
        <Text align={'left'} ms='85px'>● Widespread preference for free and open source software over commercial database products</Text>
        <Text align={'left'} ms='85px'>● Specialized query operations that are not well supported by relational model</Text>
        <Text align={'left'} ms='85px'>● Frustration with restrictiveness of relational schemas, desire for more dynamic and expressive data model</Text>
        <Text align={'left'} ms='-3px' width='94%'>At a high level, many NoSQL databases have flexible schemas, horizontal scaling, fast queries due to data model, and ease of use for 
          developers. The main difference between RDBMS (Relational Database Management System) and NoSQL is the way that the data is modeled in the database. For example, a document 
          database for NoSQL resembles JSON files, and a single document can be retrieved from the database with no joins required, which results in faster queries. The development pace 
          with SQL databases can be faster than that of a SQL database because NoSQL databases allow developers to be in control of the structure of the data, which is a great fit with 
          the modern Agile development practices based on sprints. 
        </Text>
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>Relational databases will often be used alongside a broad variety of nonrelational datastores, which is an idea called polyglot 
          persistence. Since most applications are developed using object-oriented programming languages, a transition layer is required between objects in application code and database 
          model of tables, rows, columns for SQL, which is a disconnect called impedance mismatch. Object-relational mapping (ORM) frameworks like ActiveRecord and Hibernate reduce the amount 
          of boilerplate code required for the transition layer, but can’t completely hide differences between the two models. In a relational database, the query optimizer automatically 
          decides which parts of the query to execute in which order, and which indexes to use (choices made by the query optimizer, not the application developer). Arguments in favor of 
          document data model are schema flexibility, better performance due to locality, and that for some applications it is closer to the data structures used by the application. Relational 
          model provides better support for joins and many-to-one and many-to-many relationships. If data in application has a document-like structure, then it’s a good idea to use a document 
          model. If the application uses many-to-many relationships, the document model becomes less appealing. Document model is appropriate for applications with mostly one-to-many relationships 
          (tree-structured data) or no relationships between records.
        </Text>
        <Flex mt='25px'></Flex>
        <Text align={'left'} ms='-3px' width='94%'>In terms of NoSQL, we can focus on MapReduce, which is a programming model for processing large amounts of data in bulk across many machines. 
          A limited form of it is supported by some NoSQL datastores as a mechanism for performing read-only queries across many documents (eg: MongoDB). It’s neither a declarative query language 
          nor a fully imperative query API, but somewhere in between. The logic of the query is expressed with snippets of code, which are called repeatedly by the processing framework. MapReduce 
          is a low-level programming model for distributed execution on a cluster of machines, but higher-level query languages like SQL can be implemented as a pipeline of MapReduce operations. 
          There is nothing in SQL that constrains it to running on a single machine and MapReduce doesn’t have a monopoly on distributed query execution. 
        </Text>
        <Flex mt='25px'></Flex>
      </Box>
    </Box>
  );
}

