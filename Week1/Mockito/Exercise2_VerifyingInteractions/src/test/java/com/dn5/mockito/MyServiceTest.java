package com.dn5.mockito;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();
        verify(mockApi).getData();
    }

    @Test
    public void testVerifyInteraction_exactTimes() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();
        service.fetchData();
        verify(mockApi, times(2)).getData();
        verify(mockApi, never()).toString();
    }
}
