import { Box, Image, Text, Flex} from "@chakra-ui/react";
//import latency from 'src/img/latency.jpg';

export default function Functionality() {
    return (
        <Box align={'center'} minH="100vh" p={5} bg='#F0EFE2'>
            <Box w='94%' bg='white' boxShadow={'dark-lg'} rounded='md' >
                <Text fontWeight={'bold'} fontSize='40' align={'left'} ms='50px' mt='10px'>Importance of Systems’ Functionality</Text>
                    <Text align={'left'} ms='50px'>There are three important concerns that must be addressed when working with 
                        software systems.
                    </Text>
                    <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Reliability</Text>
                <Text align={'left'} ms='-3px' width='94%'>Reliability roughly means the system “continues to work correctly even when 
                    things go wrong”. The things that go wrong are called faults, and systems that anticipate faults and cope with them 
                    are called fault-tolerant (meaning that they are tolerant to certain types of faults)/resilient. A fault isn’t the 
                    same as a failure, since a fault is one component of a system deviating from its spec, and a failure is when the system 
                    as a whole stops providing the required service to the user. It is best to design fault-tolerant mechanisms that prevent 
                    faults from causing failures; to combat hardware faults, we can add redundancy to individual hardware components in order 
                    to reduce the failure rate of the system. 
                </Text>
                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>When one component dies, the redundant component can take its place while the 
                    broken component is replaced. For software errors, systematic errors within the system are harder to anticipate because they’re 
                    correlated across nodes, causing more system failures than uncorrelated hardware faults. In terms of bugs, they lay dormant 
                    and are triggered by unusual sets of circumstances. 
                </Text>
                
                <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Scalability</Text>
                <Text align={'left'} ms='-3px' width='94%'>Scalability is a term that is used to describe a system’s ability to cope with increased 
                    load. Load can be described with a few numbers we call load parameters; load parameters depend on architecture of the system 
                    (example: requests per second to web server, ratio of reads to writes in a database). When the load increases, consider:
                </Text>
                <Text align={'left'} ms='85px'>● When the load parameter is increased and system resources (CPU, memory, network bandwidth, etc) 
                    are unchanged, how is the performance of the system affected?
                </Text>
                <Text align={'left'} ms='85px'>● When load parameter is increased, how much do you need to increase resources to keep performance 
                    unchanged?
                </Text>
                <Text align={'left'} ms='-3px' width='94%'>In batch processing systems such as Hadoop, throughput (number of records that can 
                    be processed per second, or total time to run a job on a dataset of certain size) is important. In online systems, service’s 
                    response time is important (time between response sent and received). The response time, which is what the client sees, must 
                    be thought of as a distribution of values that can be measured. The response time is the time it takes to process requests, 
                    network delays, and queuing delays; latency is the duration a request is waiting to be handled.
                </Text>
                <Flex mt='25px'></Flex>
                <Text align={'left'} ms='-3px' width='94%'>It’s a good practice to use percentiles for response time, and the median serves as 
                a good metric to know how long users have to wait. Head-of-line blocking is when a small number of slow requests hold up the 
                processing of subsequent requests; it is important to measure response times on client side. Load generating client needs to 
                sent requests independent of response time for tests, and to handle load, there must be both:
                </Text>
                <Text align={'left'} ms='85px'>● Scaling up (vertical scaling, moving to more powerful machines)</Text>
                <Text align={'left'} ms='85px'>● Scaling out (horizontal scaling, distributing load across multiple smaller machines), also 
                    known as a shared-nothing architecture
                </Text>
                <Text align={'left'} ms='-3px' width='94%'>In general, an elastic system means that they can automatically add computing 
                    resources when they detect load increase (useful if load is highly unpredictable), whereas other systems are scaled manually 
                    (simpler and may have fewer operational surprises). The architecture of systems that operate at large scale is usually highly 
                    specific to the application; even though two systems may have the same data throughput, they may be different. Architecture 
                    that scales well for a particular application is built around assumptions of which operations will be common and which 
                    will be rare.
                </Text>

                <Flex mt='25px'></Flex>
                <Text fontWeight={'bold'} fontSize='25' align={'left'} ms='50px'>Maintainability</Text>
                <Text align={'left'} ms='-3px' width='94%'>To avoid creating legacy softwares, engineers must pay attention to:</Text>
                <Text align={'left'} ms='85px'>● Operability: make it easy for operation teams to keep system running smoothly</Text>
                <Text align={'left'} ms='85px'>● Simplicity: make it easy for new engineers to understand the system</Text>
                <Text align={'left'} ms='85px'>● Evolvability: make it easy for engineers to make changes to system in the future</Text>
                <Flex mt='25px'></Flex>
            </Box>
        </Box>
    );
}

